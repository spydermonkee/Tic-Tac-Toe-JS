def title_case(sentence) 
  new_sentence = sentence.split
  new_phrase = []
  new_sentence.each do |i|
    new_phrase << i.capitalize
  end
  puts new_phrase.join(' ')
end
 


title_case('raouf')



