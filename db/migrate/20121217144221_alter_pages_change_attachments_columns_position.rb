class AlterPagesChangeAttachmentsColumnsPosition < ActiveRecord::Migration
  def up
    sql = "ALTER TABLE pages
                 CHANGE COLUMN `text` `text` TEXT CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL  AFTER `image_updated_at`,
                 CHANGE COLUMN `created_at` `created_at` DATETIME NOT NULL  AFTER `text`,
                 CHANGE COLUMN `updated_at` `updated_at` DATETIME NOT NULL  AFTER `created_at`"

    execute(sql)
  end
end
