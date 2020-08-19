class UserNotifierMailer < ApplicationMailer
  default :from => 'no-reply@example.com'
  def yo_email()
    mail( :to => 'example.com', :subject => 'Thank you for signing up!' )
  end
end
