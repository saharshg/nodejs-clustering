# nodejs-clustering

1. Understanding NodeJS under the hood
2. NodeJS -> Event loop -> v8 -> libuv
3. NodeJS is not single threaded
4. Multi threading is achieved using multi-core processors
5. Threads pooling
6. Network requests are *never* a part of thread pooling hence executed first before any other IO
7. Network request then Node events then file system tasks
8. Clustering means running multiple instances of node concurrently for improving performance
9. Tools like PM2 help in clustering of application for load balancing, concurrency, etc.
10. Web workers
