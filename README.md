# 上传服务

## 功能

已实现功能

* 



* 隐藏 input 点击直接上传
* 



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



## 文件夹上传

### 前端

为 `input` 添加 `webkitdirectory` 属性，接收到的是如下的一个数组，如果存在多层嵌套，存在 `webkitRelativePath` ，后端就通过此来进行划分目录，传输过程中可能会被转义，所以这里前端将其转为 `@`   

![image-20220218013905939](https://typora-1300781048.cos.ap-beijing.myqcloud.com/img/image-20220218013905939.png)



### 后端





# 代码规范

文件名用小写，多单词则用小驼峰

文件夹名也用小写

