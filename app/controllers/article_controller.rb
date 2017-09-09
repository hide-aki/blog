class ArticleController < ApplicationController
  def index
    render_for_react(
      props: {
        index: "Hello"
      },
    )
  end

  def show
  end
end
