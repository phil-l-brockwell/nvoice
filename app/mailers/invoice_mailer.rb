class InvoiceMailer < ApplicationMailer

  def invoice_email(invoice)
    @invoice = invoice
    mail(to: @invoice.cEmail, subject: 'This is a Test')
  end
end
