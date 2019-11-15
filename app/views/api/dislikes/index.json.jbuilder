@dislikes.each do |dislike|
    json.set! dislike.id do 
        json.partial! 'dislike', dislike: dislike
    end
end