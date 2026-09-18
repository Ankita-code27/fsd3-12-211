#EventLoop

JS Synchronous and single threaded bydefault.

##There can be async behaviour.

-with BrowserAPI -
setTimeout,setInterval,setImmediated,nextTick
-with promises
-with event handlers

A function not executed immediately but it must be executed after a while.
It has some status during the execution.
At final it may resolve()->Sucess OR reject->Uncess.
Call back function =>that pass the argument or parameter to another function.
Modern javaScript is divideed into two categories:
1.CommonJS (.cjs)->support OOPs
-first priorty(nextTick,Promise,setImmediate/setTimeout)
2.ModuleJS (.mjs)->follow modular approach -> import - (Promise,nextTick,setImmediate/setTimeout)
The common operations on folder are :
1.Write file
2.Read file
3.Append file
File Metadat
->stat
->lstat
->rstat
2.Folder
mkdir/md
rmdir/rm
readdir
3.File Metadat
->stat
->lstat
->rstat
4.Watch
->watch
->Unwatch
5.Stream
->readStream()
->writeStream()
WriteFile -> always create file and write

#File System (FS module)

#CRUD Project
assume we are making a cart related project

1.user can add any product (id,name,price,qty)into cart
2.user can see all the times of cart
3.user can remove item from cart
4.user can also update quantity of product
5.all the items should be stored after termination of project.

C-Create
R-Retrieve
