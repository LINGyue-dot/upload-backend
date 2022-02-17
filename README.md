# 上传服务

## 单文件上传

### 前端

实例使用 Vue3 ，只需要注意获取 file 的方法

### 后端

基本操作，主要是利用了 `multer` 对 `formdata` 类型数据进行解析以及存储，后利用 `koa-static` 对静态资源开启服务

## 多文件

### 前端

为其 input tag 添加上 `multiple` 属性，利用 `formdata` 将所有选择的文件 append 即可

### 后端

同样利用 `multer` 的可接收多文件。`multer.fields`

# 代码规范

文件名用小写，多单词则用小驼峰

文件夹名也用小写
