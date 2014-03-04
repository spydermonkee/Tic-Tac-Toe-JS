require('rspec')
require('title_case')

describe('title_case') do
   it('Capitalizes the first letter of the input') do
    title_case("hotel").should(eq("Hotel"))
  end
  it('capitalizes the first word in sentances') do
    title_case("The Big Red Car").should(eq("The big red car"))
  end
  it('capitalizes the first word in senctances with mixed cases') do
    title_case("MY headphones ArE wHiTe").should(eq("My Headphones Are White"))
  end 
end

