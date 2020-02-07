<?php

use Illuminate\Database\Seeder;

class TSOrganograma extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $route_id = DB::table('routes')->insertGetId(['url' => '/api/widgets/Organograma', 'class_method' => 'Widgets\Organograma@load']);

        DB::table('widgets')->insert(['name' => 'Organograma', 'description' => 'Exibe o Organograma da sua organização.', 'icon' => 'iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTEvMjAvMTgZAAZZAAADnUlEQVRoge2ZT4gbVRzHP7/5l+0a46KliFBriXYFV8168ShCD1btzYN4EfTqQb3ZgwcPehD04lnxoCzoQbBaQUE9LohJqSCpbrUKtYpIdZfdbjLzfh4ys5vMvomZMFlwdj4Qkrzfe9953/dm5v0TVaUIHnri3Eti9NVCxFKoI2e+/vDUa0VoOUWI/J+oDJedynDZqQyXncpw2akMl53KcNkp0nAxy64Za3tFCQHBuKAxSr9vr7fvC44jU2vnoUjDV4DvgX46oKrR/CF3oXHEO55efovAP+vhT1vXo2si4lp0/Vi7EIo0/A7wHmDSge6lTXP2/eVHazXnI5vh7W3zwuNPtT+9u3mD7RFzgF5RlZSidjz+i4u//PzI9W1zzhabqzmnTtx+x2f7UY8ie3gsm1tR5rXGxYqmGpbKTmW47FSGZ8jGlLFCsQ4Hne7avcBdFDfgG+DBMfGHO921eYrrgAD4obXYvJAOZI1/zwPPFHTxSXh5BppvA8+mE7NaNJxBBfYbq4csw/sz35wtVg/VW7rsHDjDeVcpfwDPAVs5yyXDUtbb+BVglfwdcAh4CzgyaYG8hrdai80PcpYBoNNd2yTb8JetxeZXU+q+nid/3hZ1O921m3KWSahPGcskrottWyiTA/cMV4bLTmW47FgNB4JxGbz+hj+eoK2Gt2ejfRIajoQ2TTeOTaPZanh9T1CbZiB798cBPP9su5b8CUHZQDvLDRwBdGQCLgrmzd97cy9+0w49AUQcMRr1Ti+PNELwcVvUkRrxpne40TOrrVtq8yKJYKIrAvwZmVpzZdX36oETp4oY3e6dXtaUrq+OuKiaUOGNo/W5k/NOYmw3ryB9RWSl7VNHPJDd0OcXzqcaIbrVk6MLDjebocsJ0Ife5VB/jJQoaTCUi14verL/2P07mwXyxXcPAO+ycwqh0Y2uLNzmyLERt/H3FaOX1yO9BjtHLQ7wtJ5c+jbR9D85H4SBu4Jwgnjp5wruMU/u9CEYbhlH4G/DX7+F+iupcdpDuC9lmKuhchW13BIyh7DE6LmXj5rRFKEOLA0nrBvoRsZ6myFyfNDXI4xORtQI4t4TGwYgAi71Fex1PYxwOJ3qYTkLQhAsNWDQOTr022Uwr06vPZM7wMQxiY1lHREO35bCoIejVB5ldw4f7WpOVNcdPGDsOaWFdH7JSLN9T6KZVUZSsUnqvSdPNSyVncpw2akMl53KcNmpDJedynDZOXCG/wV3TQ1UbNZpdwAAAABJRU5ErkJggg==', 'width' => 2, 'height' => 5,'route_id' => $route_id, 'is_new' => false, 'enabled' => true]);
        
    }

}