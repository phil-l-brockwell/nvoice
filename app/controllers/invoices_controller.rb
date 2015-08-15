class InvoicesController < ApplicationController

  def create
    invoice = Invoice.create(invoice_params)
    if invoice.save
      InvoiceMailer.client_email(invoice).deliver_later
      InvoiceMailer.business_email(invoice).deliver_later
      head 200
    else
      head 500
    end
  end

  def invoice_params
    params.require(:invoice).permit(:cName, :cEmail, :cAddress, :cPostcode, :desc, :price, :bName, :bEmail)
  end
end
