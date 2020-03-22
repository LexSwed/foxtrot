# foxtrot

my little ~pony~ project

## Development

To start development, make sure you have Docker running then run:

```bash
docker-compose up
```

This will:

- start `postgres` image for database capabilities
- run `prisma2` schema initialization and migrations
- start koa BE server
- add next.js middleware with `/client` folder watcher
