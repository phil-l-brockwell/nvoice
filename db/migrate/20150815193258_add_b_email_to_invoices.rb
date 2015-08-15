class AddBEmailToInvoices < ActiveRecord::Migration
  def change
    add_column :invoices, :bEmail, :string
  end
end
