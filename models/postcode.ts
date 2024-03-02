export interface Postcode {
  postcode_type: string
  jis: string
  old: string
  new: string
  prefecture_kana: string
  city_kana: string
  suburb_kana: string
  prefecture: string
  city: string
  suburb: string
  street_address: null
  office: null
  office_kana: null
  office_roman: null
  post_type: null
  is_separated_suburb: number
  is_koaza: number
  is_chome: number
  is_include_area: number
  status: number
  reason: number
  prefecture_roman: string
  city_roman: string
  suburb_roman: string
  handling_post_office: null
  multiple_numbers: null
  created_at: string
  updated_at: string
}
