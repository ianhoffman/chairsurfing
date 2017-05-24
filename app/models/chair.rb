class Chair < ApplicationRecord
  validates :description, :lat, :lng, :image_url, :about, :address, presence: true
  validates :accepting_guests, inclusion: { in: [true, false] }
  validates :user_id, uniqueness: true
  # validates :seating, numericality: { greater_than: 0 }

  has_many :bookings
  belongs_to :user

  def self.in_bounds(filters)
    bounds = filters[:bounds]


    north_east = bounds["northEast"]
    south_west = bounds["southWest"]

    chairs = Chair
      .where("lat < ? AND lat > ?", north_east['lat'], south_west['lat'])
      .where("lng < ? AND lng > ?", north_east['lng'], south_west['lng'])

    unless filters[:keyword] == nil || filters[:keyword] == ''
      chairs = Chair.filter_by_keyword(chairs, filters)
    end

    chairs
  end

  def self.filter_by_keyword(chairs, filters)
    keyword = `%` + filters[:keyword] + `%`
    chairs.where(
      'description LIKE ? OR address LIKE ? OR about LIKE ?', keyword, keyword, keyword
    )
  end

end
