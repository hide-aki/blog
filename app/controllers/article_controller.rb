class ArticleController < ApplicationController
  def index
    render_for_react(
      props: {
        articles: Article.all
      },
    )
  end

  def show
  end
end
