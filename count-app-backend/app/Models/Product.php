<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Collection\Collection;
use Carbon\Carbon;

/**
 *
 * Class Product
 *
 * @property int $id
 * @property string $title
 * @property string $name
 * @property float $price
 * @property string $category
 * @property Carbon $updated_at
 *
 * @property Product|null $product
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */

class Product extends Model
{
    protected $table = 'products';
    public $timestamps = false;

    protected $casts = [

    ];

    protected $dates = [
        'updated_at'
    ];

    protected $fillable = [
        'title',
        'name',
        'price',
        'category',
        'updated_at'
    ];

    public function counts()
    {
        return $this->hasMany(counts::class, 'product_id');
    }
}
