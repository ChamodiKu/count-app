<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Collection\Collection;
use Carbon\Carbon;

/**
 *
 * Class Count
 *
 * @property int $id
 * @property int $product_id
 * @property int $section_id
 * @property float $tcount
 * @property Carbon $updated_at
 *
 * @property Count|null $count
 * @property Collection|Count[] $counts
 *
 * @package App\Models
 */

class Count extends Model
{

    protected $table = 'counts';
    public $timestamps = false;

    protected $casts = [

    ];

    protected $dates = [
        'updated_at'
    ];

    protected $fillable = [
        'product_id',
        'section_id',
        'tcount',
        'updated_at'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function section()
    {
        return $this->belongsTo(Section::class, 'section_id');
    }

    public function count()
    {
        return $this->hasMany(Product::class, 'count_id');
    }
}
