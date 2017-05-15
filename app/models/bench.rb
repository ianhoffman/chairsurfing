class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :seating, numericality: { greater_than: 0 }

  def self.in_bounds(filters)
    bounds = filters[:bounds]


    northEast = bounds["northEast"]
    southWest = bounds["southWest"]

    benches = Bench
      .where("lat < ? AND lat > ?", northEast['lat'], southWest['lat'])
      .where("lng < ? AND lng > ?", northEast['lng'], southWest['lng'])

    if(filters[:maxSeating] && (filters[:maxSeating] != ''))
      benches = benches.where('seating <= ?', filters[:maxSeating])
    end

    if(filters[:minSeating] && (filters[:minSeating] != ''))
      benches = benches.where('seating >= ?', filters[:minSeating])
    end

    return benches
  end

end
