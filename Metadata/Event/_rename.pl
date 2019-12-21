#!/usr/bin/perl

%hash = ();

$hash{'chn'} = 'ch';
$hash{'cze'} = 'cz';
$hash{'ge'} = 'de';
$hash{'eng'} = 'en';
$hash{'fr'} = 'fr';
$hash{'hchn'} = 'hc';
$hash{'hun'} = 'hu';
$hash{'it'} = 'it';
$hash{'jp'} = 'ja';
$hash{'kor'} = 'ko';
$hash{'pol'} = 'pl';
$hash{'por'} = 'pt';
$hash{'ru'} = 'ru';
$hash{'srb'} = 'se';
$hash{'sp'} = 'sp';
$hash{'tur'} = 'tr';
$hash{'vie'} = 'vt';


open LOG, ">_log.txt";
opendir(DIR, ".") or die "can't opendir $dir: $!";

$i = 1;
while (defined(my $file = readdir(DIR))) {
	next if $file =~ /^\.\.?$/;
  next if $file =~ /\.pl$/;
  next if $file =~ /bkcp$/;
  open IN, $file or die "hard -> $file";
  @xml = <IN>;
  close IN;
  open OUT, ">$file" or die "hard2";
  $name = 0;
  foreach(@xml)
  {
    $line = $_;
    if ($name == 1)
    {
      $name = 2;
      if ($line =~ /\<value\>[a-z]+_/)
      {
        @mas = split /\<value\>/, $line;
        @mas2 = split /_/, $mas[1];
        $key = $mas2[0];
        if (length($key) < 4)
        {
          @mas3 = split /\<\/value\>/, $mas[1];
          $soundName = $mas3[0];
          if (exists $hash{$key})
          {
            $val = $hash{$key};
            $newName = $soundName;
            $newName =~ s/^$key\_/$val\_/;
            $newLine = $mas[0] . "<value>$newName</value>".$mas3[1];
            chomp $line;
            print LOG "$line -> $newLine";
            $line = $newLine;
          }
        }
      }
    }
    $name = 1 if $name == 0 && $line =~ /\<property\sname\=\"name\"\>/;
    print OUT $line;
  }
  close OUT;
  $i++;
  print "$i/8235\r";
}
closedir(DIR);
close LOG;
