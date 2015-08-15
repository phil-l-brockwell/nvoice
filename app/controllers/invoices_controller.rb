class InvoicesController < ApplicationController

  def create
    invoice = Invoice.create(invoice_params)
    if invoice.save
      InvoiceMailer.invoice_email(invoice).deliver_now
      head 200
    else
      head 500
    end
  end

  def invoice_params
    params.require(:invoice).permit(:cName, :cEmail, :cAddress, :cPostcode, :desc, :price, :bName)
  end
end
