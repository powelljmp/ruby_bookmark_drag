class BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.all
  end

  def new 
    @bookmark = Bookmark.new
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    respond_to do |format|
      if @bookmark.save
        format.json
      end
    end
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
