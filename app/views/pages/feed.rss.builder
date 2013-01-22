xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Артем остапец"
    xml.description "Домашняя страница и блог о web разработке"
    xml.link pages_url

    for page in @pages
      xml.item do
        xml.title page.title
        xml.description page.text_content
        xml.pubDate page.created_at.to_s(:rfc822)
        xml.link page_url(page)
        xml.guid page_url(page)
      end
    end
  end
end