CREATE TABLE "links" (
	"id" serial PRIMARY KEY,
	"short_code" varchar(32) NOT NULL,
	"url" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "links_short_code_idx" ON "links" ("short_code");