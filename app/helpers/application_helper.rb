module ApplicationHelper

  def url_fixer(str)
    str.start_with?('http://') ? str : "http://#{str}"
  end

end
