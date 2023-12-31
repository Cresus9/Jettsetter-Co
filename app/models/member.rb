class Member < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :jets, through: :bookings
    has_many :passengers
end
