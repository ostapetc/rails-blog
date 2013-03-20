class CreateQuizAnswers < ActiveRecord::Migration
  def change
    create_table :quiz_answers do |t|
      t.integer  :question_id
      t.text     :text
      t.boolean  :is_right

      t.timestamps
    end
  end
end
