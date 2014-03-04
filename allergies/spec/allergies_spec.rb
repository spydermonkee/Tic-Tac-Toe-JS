require('rspec')
require('allergies')

describe('allergies') do
   it('returns the correct score for each allergy') do
    allergies(9).should(eq(["strawberries", "eggs"]))
  end
end


