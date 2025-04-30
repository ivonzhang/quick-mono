# @my-org/build-scripts

这里集中管理构建相关的脚本，目前只有一个build的脚本，作用如下：
- 使用**tsc**命令行，读取根目录下的**tsconfig.json**，打包**typescript**文件
- 使用copy的方式，把非ts文件（如:less、图片等）拷贝到打包目录outDir中
- 使用**ts-alias**命令行，为打包后的js文件，引入路径处添加后缀

具体例子，可以查看**packages/ui**库的使用和打包结果
