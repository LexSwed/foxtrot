# Migration `20200322155949-init`

This migration has been generated at 3/22/2020, 3:59:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Token" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "expirationDate" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "ip" text  NOT NULL DEFAULT '',
    "isActive" boolean  NOT NULL DEFAULT false,
    "token" text  NOT NULL DEFAULT ''
) 

CREATE TABLE "public"."Organization" (
    "id" text  NOT NULL ,
    "name" text  NOT NULL DEFAULT '',
    "user" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."User" (
    "email" text  NOT NULL DEFAULT '',
    "firstName" text   ,
    "id" text  NOT NULL ,
    "lastName" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Team" (
    "id" text  NOT NULL ,
    "name" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Profile" (
    "id" SERIAL,
    "team" text   ,
    "user" text  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "Token.token" ON "public"."Token"("token")

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Organization" ADD FOREIGN KEY ("user")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Profile" ADD FOREIGN KEY ("user")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Profile" ADD FOREIGN KEY ("team")REFERENCES "public"."Team"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200322155949-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,41 @@
+datasource db {
+  provider = "postgres"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Token {
+    ip String
+    token String @unique
+    createdAt DateTime @default(now())
+    expirationDate DateTime
+    isActive Boolean
+}
+
+model Organization {
+  id    String  @id @default(cuid())
+  name    String
+}
+
+
+model User {
+  id    String  @id @default(cuid())
+  email      String  @unique
+  firstName  String?
+  lastName   String?
+  orgs Organization[]
+}
+
+model Team {
+  id    String  @id @default(cuid())
+  name String
+  members Profile[]
+}
+
+model Profile {
+  id Int @id @default(autoincrement())
+  user User
+}
```


