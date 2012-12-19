namespace :db do
  desc "Erase and fill tables"
  task :populate => :environment do
    require "populator"
    require "faker"

    [Page, Tag, PageTag].each(&:delete_all)

    ['php', 'mysql', 'ruby', 'ruby on rails', 'html 5', 'yii framework', 'javascript', 'jquery'].each do |tag_name|
      Tag.create(name: tag_name)
    end


    Page.populate 23 do |page|
      page.title = Populator.words(2..4).titleize
      page.text  = Populator.sentences(20..100)

      Comment.populate 5..12 do |comment|
        comment.page_id   = page.id
        comment.user_name = Populator.words(1..2).titleize
        comment.text      = Populator.sentences(5..10)
      end

      tags = Tag.order('random()').limit(3)
      tags.each do |tag|
        page_tag = PageTag.create(page_id: page.id, tag_id: tag.id)
      end
    end
  end
end
