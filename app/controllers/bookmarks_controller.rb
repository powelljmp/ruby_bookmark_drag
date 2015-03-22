class BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.all
    @bookmark = Bookmark.new
  end

  def new 
    @bookmark = Bookmark.new
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.save
    flash[:notice] = "Bookmark added!"
    redirect_to root_path
  end



  def show
    render partial: 'shared/bookmark', layout: false
  end

  private

  def bookmark_params
    params.require(:bookmark).permit!
  end

end
