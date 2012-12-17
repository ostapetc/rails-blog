namespace :db do
  desc "Erase and fill tables"
  task :populate => :environment do
    require "populator"
    require "faker"

    [Page, Tag, PageTag].each(&:delete_all)

    Tag.populate 10 do |tag, i|
      tag.name = Populator.words(1).titleize
    end

    Page.populate 23 do |page|
      page.title = Populator.words(2..4).titleize
      page.text  = Populator.sentences(20..100)

      tags = Tag.order('rand()').limit(3)
      tags.each do |tag|
        page_tag = PageTag.create(page_id: page.id, tag_id: tag.id)
      end
    end
  end
end
