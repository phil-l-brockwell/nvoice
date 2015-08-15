class InvoicesController < ApplicationController

  def create
    @invoice = Invoice.create(invoice_params)
    if @invoice.save
      html = render_to_string("invoice.html.erb", layout: false)
      pdf = WickedPdf.new.pdf_from_string(html)
      InvoiceMailer.client_email(@invoice, pdf).deliver_later
      InvoiceMailer.business_email(@invoice, pdf).deliver_later
      head 200
    else
      head 500
    end
  end

  def invoice_params
    params.require(:invoice).permit(:cName, :cEmail, :cAddress, :cPostcode, :desc, :price, :bName, :bEmail)
  end
end
