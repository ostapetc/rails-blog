namespace :db do
  desc "Erase and fill tables"
  task :populate => :environment do
    require "populator"
    require "faker"

    [Page].each(&:delete_all)

    Page.populate 23 do |page|
      page.title = Populator.words(2..4).titleize
      page.text  = Populator.sentences(20..100)
    end
  end
end
