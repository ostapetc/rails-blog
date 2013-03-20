class AlterQuizQuestions < ActiveRecord::Migration
  def up
    rename_column :quiz_questions, :type, :answer_type
  end


  def down
    rename_column :quiz_questions, :answer_type, :type
  end
end
