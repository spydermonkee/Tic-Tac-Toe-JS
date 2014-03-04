require 'rspec'
require 'prime_sift'

describe ('prime_sift') do
  it('creates an array with all prime numbers less than a given number') do
    prime_sift(100).should(eq([2,3]))
  end 
end


