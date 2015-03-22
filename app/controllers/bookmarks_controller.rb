class BookmarksController < ApplicationController
  def index
    @bookmarks = Bookmark.all
    @bookmark = Bookmark.new
  end

  def new 
    @bookmark = Bookmark.new
  end

# This action uses POST parameters. They are most likely coming 
# from an HTML form which the user has submitted. The URL for 
# this RESTful request will be "/clients", and the data will be 
# sent as part of the request body.
# :create -> will hold all the params, which could include  :title, :<name>
  def create
<<<<<<< HEAD
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.save
    flash[:notice] = "Bookmark added!"
    redirect_to root_path
=======
  	@bookmark = Bookmark.new(params[:create]) 
  	if @bookmark.save
		# render text: "Thanks for sending a GET request with cURL! #{request.body.read}"
		 render json: params[:title]
   	end 
>>>>>>> 250be2eb376f47c47dd543843a200947ad81846c
  end



  def show
  # need to pass through local variable bm
  # which contains info 
    render partial: 'shared/bookmark', layout: false
  end

  private

  def bookmark_params
    params.require(:bookmark).permit!
  end

end
