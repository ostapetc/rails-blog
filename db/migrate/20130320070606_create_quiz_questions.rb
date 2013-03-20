class CreateQuizQuestions < ActiveRecord::Migration
  def change
    create_table :quiz_questions do |t|
      t.integer :quiz_id
      t.text    :text
      t.string  :image
      t.integer :type

      t.timestamps
    end
  end
end
