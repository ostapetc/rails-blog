class InsertDefQuizzes < ActiveRecord::Migration
  def up
    quizzes = [
        {
            :title       => 'Zend PHP 5.3 Certification',
            :desc        => 'Zend certifications have become an industry-wide standard and a measure of distinction that employers use to evaluate prospective employees. Stand out from the crowd by getting certified on PHP and Zend Framework.',
            :passing_per => 90
        },
        {
            :title       => 'Oracle Certified Associate, MySQL 5',
            :desc        => 'The Oracle Certified Associate, MySQL 5 certification is an entry-level certification. It is intended for those who are relatively new to using the MySQL database server and covers basic database management system concepts as well as basic SQL. We recommend this certification for MySQL users that know the basics, but have not yet obtained the experience gained by professional MySQL DBAs or Developers.',
            :passing_per => 90
        }
    ]

    quizzes.each do |data|
      Quiz.create(data)
    end
  end


  def down
    Quiz.delete_all
  end
end
