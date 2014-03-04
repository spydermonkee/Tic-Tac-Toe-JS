# def prime_sift(number)
#   prime = 2
#   numbers = Array(prime..number)
#   while prime < number
#     numbers.each do |num|
#       numbers.delete(num) unless num == prime if num % prime == 0
#     end
#   end  
#    numbers - [1]
# end


def prime_sift(number)



  (2...number).to_a.each do |prime| 
    self.reject!{ |num| num % prime == 0 && !(prime == num) }
    
  end
end

