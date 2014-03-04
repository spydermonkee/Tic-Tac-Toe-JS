def allergies(score)
  allergy_hash = {'strawberries' => 8,
                  'cats' => 128, 
                  'chocolate' => 32,
                  'eggs' => 1,
                  'shellfish' => 4,
                  'tomatoes' => 16,
                  'peanuts' => 2,
                  'pollen' => 64}
  new_score = score
  allergens = []
  allergy_array = allergy_hash.sort_by { |allergy, points| points}
  allergy_array = allergy_array.reverse
  allergy_array.each do |i|
    if new_score >= i[1]
      new_score -= i[1]
      allergens << i[0]
    end
  end
  allergens
end

puts allergies(90)
