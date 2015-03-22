class BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.all
  end

  def show
  end


end
