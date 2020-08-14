class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :auth0_id
      t.string :name
      t.timestamps
    end
  end
end
