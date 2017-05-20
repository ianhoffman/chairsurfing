class Chair < ApplicationRecord
  validates :description, :lat, :lng, :image_url, :about, :address, :accepting_guests, presence: true
  # validates :seating, numericality: { greater_than: 0 }

  belongs_to :user

  def self.in_bounds(filters)
    bounds = filters[:bounds]


    northEast = bounds["northEast"]
    southWest = bounds["southWest"]

    chairs = Chair
      .where("lat < ? AND lat > ?", northEast['lat'], southWest['lat'])
      .where("lng < ? AND lng > ?", northEast['lng'], southWest['lng'])

    # if(filters[:maxSeating] && (filters[:maxSeating] != ''))
    #   chairs = chairs.where('seating <= ?', filters[:maxSeating])
    # end
    #
    # if(filters[:minSeating] && (filters[:minSeating] != ''))
    #   chairs = chairs.where('seating >= ?', filters[:minSeating])
    # end

    return chairs
  end

end
