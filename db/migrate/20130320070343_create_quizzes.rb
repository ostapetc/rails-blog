class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string  :title, :null => false
      t.text    :desc,  :null => false
      t.integer :passing_per, :default => 50
      t.timestamps
    end
  end
end
