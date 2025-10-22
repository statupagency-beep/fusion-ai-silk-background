CREATE TABLE `ai_apps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`icon_name` text NOT NULL,
	`status` text NOT NULL,
	`usage_count` integer DEFAULT 0 NOT NULL,
	`category` text NOT NULL,
	`gradient` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
