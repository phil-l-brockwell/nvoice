class InvoiceMailer < ApplicationMailer

  default from: 'nvoiceapp@gmail.com'

  def client_email(invoice, pdf)
    @invoice = invoice
    attachments['nvoice.pdf'] = pdf
    mail(to: @invoice.cEmail, subject: 'This is a Test')
  end

  def business_email(invoice, pdf)
    @invoice = invoice
    attachments['nvoice.pdf'] = pdf
    mail(to: @invoice.bEmail, subject: 'This is a Test')   
  end
end
