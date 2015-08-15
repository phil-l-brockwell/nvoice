class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.string :cName
      t.string :cEmail
      t.string :cAddress
      t.string :cPostcode
      t.string :desc
      t.integer :price
      t.string :bName

      t.timestamps null: false
    end
  end
end
