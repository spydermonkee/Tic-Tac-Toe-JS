require('rspec')
require('pig_latin')

describe('pig_latin') do
  it('adds "ay" to the end of words') do
    pig_latin('epicodus').should(eq('epicodusay'))
  end
   it("moves a consonants at the begining of a word to the end") do
    pig_latin('candy').should(eq('andycay'))
  end
end


