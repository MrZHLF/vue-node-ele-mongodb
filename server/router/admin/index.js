module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const jwt = require('jsonwebtoken');
    const AdminUser = require('../../models/AdminUser');
    const assert = require('http-assert') //判断校验


    // 登录校验中间件
    const authMiddleware =  require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    //添加
    router.post('/',async(req,res) =>{
        const model = await req.Model.create(req.body);
        res.send(model)
    })

    
    // 获取列表
    router.get('/',async(req,res) =>{
        // populate查询是否有关联的数据库
        const queryOptions = {};
        if(req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10000);   
        res.send(items)
    })

    //获取单个内容
    router.get('/:id',async(req,res) =>{
        const model = await req.Model.findById(req.params.id);
        res.send(model)
    })

    //更新
    router.put('/:id',async(req,res) =>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send(model)
    })

    // 删除单个
    router.delete('/:id',async(req,res) =>{
        await req.Model.findByIdAndDelete(req.params.id,req.body);
        res.send({
            success:true
        })
    })

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router )

    //图片上传
    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async (req,res) =>{
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // 登录接口

    app.post('/admin/api/login',async(req,res) =>{
       //根据用户名找用户
       const { username, password } = req.body
       const user = await AdminUser.findOne({ username }).select('+password')
       assert(user, 422 , '用户不存在')
    // 第2种写法
    //    if(!user) {
    //     return res.status(422).send({
    //         message:"用户不存在"
    //     })
    //    }
    // 校验密码
    const isValid = require('bcryptjs').compareSync(password,user.password);
    assert(isValid,422,'密码错误')
    // 返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    // 返回token和用户信息
    res.send({token,user})
    })  

    // 错误函数处理
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}
